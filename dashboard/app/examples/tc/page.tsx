// 先抽象  在具体
// 泛型
// 抽象： 起名字
function BeArray<State>(value: State): State[] {
  return [value];
}

// 具体：定义类型
const arr = BeArray<number>(1);

// 抽象：起名字
function login({ user, password }: { user: string; password: string }) {}
// 具体：定义类型
const { user, password }: { user: string; password: string } = {
  user: "admin",
  password: "password",
};

export default function Page() {
  console.log(arr);
  console.log(user);
  console.log(password);
}
