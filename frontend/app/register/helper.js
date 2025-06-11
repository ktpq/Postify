import Swal from "sweetalert2";
import axios from "axios";
import isEmail from "validator/lib/isEmail";

export const handleRegister = async (
  inputUsername,
  inputEmail,
  inputPassword,
  inputConfirmPassword
) => {
  // เช็คช่องว่าง
  if (
    !inputUsername ||
    !inputEmail ||
    !inputPassword ||
    !inputConfirmPassword
  ) {
    Swal.fire({
      title: "ข้อมูลไม่ครบถ้วน",
      text: "โปรดกรอกข้อมูลให้ครบทุกช่องก่อนดำเนินการต่อ",
      icon: "warning",
    });
    return;
  }

  // ตรวจสอบอีเมล
  if (!isEmail(inputEmail)) {
    Swal.fire({
      title: "อีเมลไม่ถูกต้อง",
      text: "โปรดตรวจสอบรูปแบบอีเมลของคุณอีกครั้ง เช่น your@email.com",
      icon: "error",
    });
    return;
  }

  // ตรวจสอบความยาวของรหัสผ่าน
  if (inputPassword.length < 6) {
    Swal.fire({
      title: "รหัสผ่านสั้นเกินไป",
      text: "โปรดตั้งรหัสผ่านอย่างน้อย 6 ตัวอักษรเพื่อความปลอดภัย",
      icon: "error",
    });
    return;
  }

  // ตรวจสอบว่ารหัสผ่านตรงกันไหม
  if (inputPassword !== inputConfirmPassword) {
    Swal.fire({
      title: "รหัสผ่านไม่ตรงกัน",
      text: "โปรดยืนยันรหัสผ่านให้ตรงกันทั้งสองช่อง",
      icon: "error",
    });
    return;
  }

  // ✅ ถ้าทุกอย่างผ่าน
  try {
    const response = await axios.post("http://localhost:5000/api/register", {
      username: inputUsername,
      email: inputEmail,
      password: inputPassword,
    });

    if (response.data.error) {
      Swal.fire({
        title: "มีอีเมล์นี้อยู่ในระบบอยู่แล้ว",
        text: "กรุณาลองใหม่อีกครั้ง!",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "สมัครสมาชิกสำเร็จ!",
        text: "ไปหน้าเข้าสู่ระบบเพื่อใช้งาน",
        icon: "success",
      }).then(() => {
        window.location.href = "/login";
      });
    }
  } catch (err) {
    Swal.fire({
      title: "เกิดข้อผิดพลาด",
      text: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
      icon: "error",
    });
    console.error(err);
  }
};
