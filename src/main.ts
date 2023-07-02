import { hello } from "./module/hello";

// const hello: string = "Hello World!";
// console.log(hello);

hello("Hello World!!");

// Note: TypeScriptでは型を定義しない場合は「型推論」で型が勝手につく。変数をホバーすることで確認することができる。

////////////////////////////////////////////
// string,number,boolean
////////////////////////////////////////////
const name: string = "Taro";
const age: number = 30;
const isWake: boolean = true;

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
// typeエイリアス（型を変数かする）
////////////////////////////////////////////
type ClothSize = "S" | "M" | "L";
let cloth: ClothSize = "M";

////////////////////////////////////////////
// any型 (型定義をしない)
////////////////////////////////////////////
//Note: なんでもOK
const anything: any = 1500;

////////////////////////////////////////////
// unknown型
////////////////////////////////////////////
//Note: any型よりも少し厳しい型。any同様なんでも入れられるが、その変数を使うときに確認が必要。
let unknownVal: unknown;
unknownVal = "hello";
// let text:string = unknownVal; //型エラー
//↓↓ typeofを使って確認する必要がある
if (typeof unknownVal === "string") {
  console.log(unknownVal);
}

////////////////////////////////////////////
// never型
////////////////////////////////////////////
//Note: 起こり得ない値の型を使うとき。決して何も返さない。
function error(msg: string): never {
  throw new Error(msg);
}
// console.log(error("This is error!!"));

////////////////////////////////////////////
// 関数に型を適用
////////////////////////////////////////////
//戻り値がある場合
const add = (a: number, b: number): number => a + b;

//戻り値がない場合(void)
const cLog = (word: string): void => console.log(word);

//関数の型注釈(arrowになるので注意)
const add2: (n1: number, n2: number) => number = add;

////////////////////////////////////////////
// undefined型とnull型
////////////////////////////////////////////
//Note: undefined型は値が存在しないことを示す型。滅多に使わない。
let tmpUndefined: undefined = undefined; //undefinedしか入れれない
let tmpNull: null = null; //nullしか入れれない

////////////////////////////////////////////
// callback型
////////////////////////////////////////////
// Note: callback部分の型定義はarrowになるので注意
function cbTest(num: number, callback: (num: number) => number): void {
  const tmp = callback(num * 2);
  console.log(tmp);
}
const cbTest2 = (num: number): number => {
  const tmp = num * 3;
  return tmp;
};
cbTest(10, cbTest2);
