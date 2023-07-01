import { hello } from "./module/hello";

// const hello: string = "Hello World!";
// console.log(hello);

hello("Hello World!!");

// Note: TypeScriptでは型を定義しない場合は「型推論」で型が勝手につく。変数をホバーすることで確認することができる。

////////////////////////////////////////////
// 配列
////////////////////////////////////////////
const arrayNum: number[] = [1, 2, 3, 4, 5];
const arrayStr: string[] = ["a", "b", "c", "d", "e"];
const arrayUnion: (string | number)[] = ["a", "b", "c", 1];

////////////////////////////////////////////
// オブジェクト
////////////////////////////////////////////
const person: { name: string; age: number } = {
  name: "John",
  age: 20,
};
// console.log(person.name);

////////////////////////////////////////////
// Tuple型
////////////////////////////////////////////
//Note: 配列に厳しい制限をかける型
const arrayTuple: [number, string, boolean] = [1500, "Title", false];

////////////////////////////////////////////
// Enum（列挙型）
////////////////////////////////////////////
//Note: 特定のまとまったグループのみを受け入れる型
//Enumに関しては、グループ名はパスカルケース（頭大文字）、中身は全部大文字で定義するのが一般的
enum CoffeeSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}
const coffee = {
  hot: true,
  size: CoffeeSize.SMALL,
};

////////////////////////////////////////////
// Union型
////////////////////////////////////////////
let unionType: number | string = 1000;
let unionTypes: (number | string)[] = [1000, "Hello"];

////////////////////////////////////////////
// Literal型 (定義したものしか入れられない)
////////////////////////////////////////////
let litetalFruits: "Apple" | "Orange" = "Apple";
let litetalNumber: 0 | 1 = 0;

////////////////////////////////////////////
// any (型定義をしない)
////////////////////////////////////////////
//Note: なんでもOK
const anything: any = 1500;
