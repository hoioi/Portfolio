// 숫자를 증가시킬 버튼에 대한 정의
const btn = document.querySelector("button");

// 변경된 값이 출력되어야 하는 공간에 대한 정의
const output = document.querySelector("output");

// 기본수량에 담겨있는 변수!!
let count = 1;
let price = 350000;

// 버튼을 클릭했을 때, 기본수량 & 값이 변경해야하는 이벤트!!
btn.addEventListener("click", counterReset);

// 값이 변경하게끔 하는 함수에 대한 정의
const counterReset = () => {
  let result = count * price;
  output.innerText = result;
};

// json으로 데이터를 가져오고 싶다면?!!!
fetch("./modal.json")
  .then(() => {
    data.json();
  })
  .then(() => {
    Number(data.sale_price);
  });
