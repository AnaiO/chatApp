import LoginForm from "../components/Login/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col h-[70vh] items-center justify-center"> 
      <h1 className="text-center text-white py-4">LOGIN PAGE</h1>
      <div className="">
        <LoginForm />
      </div>
    </div>
  );
}