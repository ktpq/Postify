import Swal from "sweetalert2";
import axios from "axios";

export const handleLogin = async (email, password) => {
  const response = await axios.post("http://localhost:5000/api/login",{
    email: email,
    password: password
  }, { withCredentials: true })
  if (response.data.message === "ไม่พบผู้ใช้ในระบบ") {
    Swal.fire({
      title: "ไม่พบผู้ใช้ในระบบ",
      text: "โปรดตรวจสอบอีเมลของคุณอีกครั้ง",
      icon: "error",
    });
  }

  if (response.data.message === "รหัสผ่านไม่ถูกต้อง") {
    Swal.fire({
      title: "รหัสผ่านไม่ถูกต้อง",
      text: "โปรดตรวจสอบรหัสผ่านของคุณอีกครั้ง",
      icon: "error",
    });
  }

  if (response.data.message === "เข้าสู่ระบบสำเร็จ") {
    Swal.fire({
      title: "เข้าสู่ระบบสำเร็จ",
      text: "ยินดีต้อนรับกลับสู่ระบบ",
      icon: "success",
    }).then(() => {
      window.location.href = "/";
    });
  }
}