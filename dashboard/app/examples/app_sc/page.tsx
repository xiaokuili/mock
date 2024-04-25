export default function Page() {
  return (
    <div className="h-screen flex flex-col md:overflow-y-hidden md:flex-row ">
      <div className="w-full flex-none md:w-64 bg-blue-400">
        移动端：导航栏横向并且固定在最上方 flex-none w-full PC: 导航栏固定大小
        md:w-64
      </div>
      <div className="grow  overflow-y-auto bg-orange-300">
        <div className="h-96">content</div>
        <div className="h-96">content</div>
        <div className="h-96">content</div>

        <div className="h-96">content</div>
      </div>
    </div>
  );
}
