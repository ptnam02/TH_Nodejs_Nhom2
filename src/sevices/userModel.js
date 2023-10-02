import connection from "./../configs/connectDB";

const getAllUsers = async () => {
  try {
    const [rows, fields] = await connection.execute("SELECT * FROM `users`");
    //   Kiểm tra xem có dữ liệu trả về không
    if (rows && rows.length > 0) {
      return rows; // Trả về mảng chứa dữ liệu
    } else {
      return []; // Trả về mảng rỗng nếu không có dữ liệu
    }
  } catch (error) {
    console.error("Lỗi khi truy vấn dữ liệu từ CSDL:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
};

const isUserExist = async (username, email) => {
    try {
      // Truy vấn kiểm tra xem người dùng đã tồn tại chưa
      const [rows, fields] = await connection.execute(
        'SELECT * FROM users WHERE username = ? OR email = ?',
        [username, email]
      );
  
      // Nếu có dòng dữ liệu trả về, người dùng đã tồn tại
      if (rows && rows.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Lỗi khi kiểm tra người dùng tồn tại:", error);
      throw error;
    }
  };
// const isUserExist = async (username, email) => {
//   try {
//     const [rows, fields] = await connection.execute(
//       "SELECT * FROM `users` WHERE `username` = ? OR `email` = ?",
//       [username, email]
//     );
//     //   Kiểm tra xem có dữ liệu trả về không

//     if (rows && rows.length<1) {
//         return true; // Trả về mảng chứa dữ liệu
//     } else {
//       return false; // Trả về mảng rỗng nếu không có dữ liệu
//     }
//   } catch (error) {
//     console.error("Lỗi khi truy vấn dữ liệu từ CSDL:", error);
//     throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
//   }
// };
const insertUser = async (
  username,
  password,
  fullname,
  sex,
  email,
  address,
  role
) => {
  try {
    // Sử dụng parameterized query để chèn dữ liệu an toàn vào CSDL
    const [rows, fields] = await connection.execute(
      "INSERT INTO users (username, password, fullname, sex, email, address, groupid) VALUES (?, ?, ?, ?, ?, ?,?)",
      [username, password, fullname, sex, email, address, role]
    );

    // Trả về kết quả của truy vấn nếu cần
    return rows;
  } catch (error) {
    console.error("Lỗi khi chèn người dùng:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm này
  }
};

export default { getAllUsers, insertUser, isUserExist };
