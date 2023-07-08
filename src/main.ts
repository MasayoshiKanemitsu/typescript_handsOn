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

//////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////
// Class
////////////////////////////////////////////
class Person {
  //クラス内で使用する変数を定義
  name: string;
  age: number;

  //初期化（Personというクラスを使う時の設計書の中身はconstructor内に書く）
  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  //メソッド
  greeting(this: Person) {
    console.log(this.name);
  }
}

let player2: Person = new Person("Mary", 22);
const player1 = new Person("John", 20);
console.log(player1);
player1.greeting();

//privateとpublic（とprotected）
// Note: protectedは継承先でも参照できる。privateは継承先では参照できないため。
class Person2 {
  public name: string; //デフォルトがpublicのため、省略可。
  private age: number; //privateをつけることでクラス内ではアクセスできるが、クラス外からではアクセスできなくなる。関数を通した時のみ使えるようにするなど。

  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  incrementAge(this: Person2) {
    this.age++;
  }
}
let player3: Person2 = new Person2("Taro", 25);

//初期化の省略記法
class Person3 {
  constructor(public name: string, private age: number) {}
}
let player4 = new Person3("Jiro", 23);

//readonly
//Note: readonlyで宣言した変数の値はクラス内でも変更できない。読むだけ。
class Person4 {
  constructor(public readonly name: string, private readonly age: number) {}
}
let player5: Person4 = new Person4("Smith", 35);

//extends
//Note: Personを継承してTeacherを作る。(subjectはTeacher固有)
class Teacher extends Person {
  //getもsetも関数のように扱える
  get subject(): string {
    if (!this._subject) {
      throw new Error("There is no subject");
    }
    return this._subject;
  }
  set subject(value: string) {
    this._subject = value;
  }
  constructor(name: string, age: number, private _subject: string) {
    super(name, age); //extendsを使用するときに絶対必要。継承元の引数を見ているため、引数はすべて入れる必要がある。
  }

  //継承元と同じ関数を定義することで、上書きができる。
  greeting(this: Teacher) {
    console.log(this.subject);
  }
}
const teacher = new Teacher("Baker", 40, "math");
console.log(teacher.subject);
teacher.subject = "Music";
console.log(teacher.subject);

//static
class tool {
  static val = "This is static.";
  static method = () => {
    console.log(tool.val + "です");
  };
}
console.log(tool.val);
tool.method();

//Abstract
//Note：継承にのみ使えるクラス。インスタンスを生成できない。
abstract class Hoge {
  constructor(public name: string) {}
  greeting(this: Hoge) {
    console.log(this.name);
  }
  abstract extra(): void; //ここで定義を保証して、継承先で必ず同じものを作って具体的な機能を盛り込む。
}

class Fuga extends Hoge {
  constructor(name: string) {
    super(name);
  }
  extra(): void {
    console.log("abstract");
  }
}

////////////////////////////////////////////
// interface
////////////////////////////////////////////
//Note: オブジェクトの型。オブジェクトのみで使えるTypeエイリアス
//typeエイリアスとほとんど違いがないが、interfaceはオブジェクトのみで使用ができる(逆に言えばオブジェクトにしか使われてないのでわかりやすい)。typeエイリアスは全部いける。
//interfaceの定義
interface Human {
  name: string;
  age: number;
  greeting(msg: string): void;
}

const human: Human = {
  name: "John",
  age: 20,
  greeting(msg: string) {
    console.log(msg);
  },
};
let developer: Human;

//implements　interfaceをclassに適用させる
class Developer implements Human {
  constructor(public name: string, public age: number) {}
  greeting(msg: string) {
    console.log(msg);
  }
}

//interfaceの継承
//Note: BBBにAAAを継承する
interface AAA {
  firstName: string;
}
interface BBB extends AAA {
  lastName: string;
}

//インデックスシグネチャを使った柔軟なinterface作り
interface CCC {
  name: string;
  [key: string]: string; //こうすることで、このタイプの内容を型の参照先に自由に追加できる。ただしこの方法を使用する場合、このinterface内の型は全て同じにしなければならない。
  //age: number; //ダメ
}
const ccc: CCC = {
  name: "John",
  role: "Developer",
  counttry: "Japan",
};

////////////////////////////////////////////
// intersection
////////////////////////////////////////////
type Engineer = {
  name: string;
  role: string;
};
type Blogger = {
  name: string;
  follower: number;
};
type EngineerBlogger = Engineer & Blogger; //EngineerかつBloggerのtype
// 上記は右と同じ ⇨ interface EngineerBlogger extends Engineer,Blogger {}

const Taro: EngineerBlogger = {
  name: "Taro",
  role: "front-end",
  follower: 2000,
};

////////////////////////////////////////////
// tyoe guard (typeof, in, instanceof)
////////////////////////////////////////////
//typeof
function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    //xがstringの場合
  } else {
    //xがnumberの場合
  }
}

//in
type Nomado = Engineer & Blogger; //EnginingかつBloggerのtype
function describeNomado(nomado: Nomado) {
  console.log(nomado.name);

  //nomadoのオブジェクトに'role'が存在する場合
  if ("role" in nomado) {
    console.log(nomado.role);
  }
  if ("follower" in nomado) {
    console.log(nomado.follower);
  }
}

//instanceof(classの場合に使える)
class Dog {
  speak() {
    console.log("woof");
  }
}
class Bird {
  speak() {
    console.log("chun");
  }
  fly() {
    console.log("flutter");
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();

  //Birdクラスから生成されたインスタンスの場合は
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());

////////////////////////////////////////////
// 型アサーション（型注釈できない場合、手動で型を上書き）
////////////////////////////////////////////
//Note：公式が用意したinterfaceの中に「HTMLElement」があるがかなり曖昧な型。HTMLInputElementはそのタグをより詳細に指定している。
const input = <HTMLInputElement>document.getElementById("input");
//const input = document.getElementById("input") as HTMLInputElement; //上記と同じ。JSXではこっちの記法の方がよい
input.value = "input value";

//Nullではないと指定する場合(末尾に！マーク)
const input2 = document.getElementById("input")!;

////////////////////////////////////////////
// LookUp型（interfaceの中にある型を参照）
////////////////////////////////////////////
interface Member {
  id: number;
  name: string;
}
type Look_ID = Member["id"];
type Look_ID2 = Member["id" | "name"];

////////////////////////////////////////////
// constアサーション
////////////////////////////////////////////
const milk = "milk" as const;
let drink = milk;
const tmpArray = [10, 20] as const;
const peter = {
  name: "Peter",
  age: 45,
} as const;
