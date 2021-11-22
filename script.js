const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  let num1 = parseFloat(n1); 
  let num2 = parseFloat(n2);
  if(operator === '+'){
    result = num1+num2;
  }
  if(operator === '-'){
    result = num1-num2;
  }
  if(operator === '*'){
    result = num1*num2;
  }
  if(operator === '/'){
    result = num1/num2;
  }
  
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      console.log('숫자 ' + buttonContent + ' 버튼');
      if(firstOperend.textContent !== '0'){ 
        secondOperend.textContent = buttonContent;
      }else{ 
        firstOperend.textContent = buttonContent;
      }
    }

    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      operator.textContent = buttonContent;
    }

    if (action === 'decimal') {
      console.log('소수점 버튼');
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      firstOperend.textContent ='0'; 
      secondOperend.textContent ='0'; 
      operator.textContent='+';
      calculatedResult.textContent='0';
    }

    if (action === 'calculate') {
      console.log('계산 버튼');
      calculatedResult.textContent = calculate(firstOperend.textContent,operator.textContent,secondOperend.textContent);
    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.
//연산자를 누를 때마다 계산이 되도록 + 마지막 연산자에 대한 계산으로 해야하니까 숫자 직전 연산자로

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum, calculateNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      //previousKey가 undefined + operator 전값
      if(previousKey === 'operator'){ 
        previousNum = display.textContent;
        //operator를 쓰기 전의 숫자 넣는다
        display.textContent = buttonContent;
      }
      else if(display.textContent !== '0'){ 
          display.textContent += buttonContent;
        }else{ 
          display.textContent = buttonContent;
        }

        previousKey = 'number';
        calculateNum = display.textContent;
        //마지막에 입력한 수
      } 


      //두번째 연산자를 쓰기 전에 나온 두 값 중 첫번째 값
      
    
    if (action === 'operator') {
      //operator를 쓰기 전의 숫자
      if(previousNum === undefined){ 
        previousNum = display.textContent;
        //첫숫자면
      }

      console.log(previousNum);
      if(previousKey === 'number'){ 
        if(operatorForAdvanced){ 
          //연산자 업데이트 전 이전 두 숫자 계산(previous도 업데이트전)
          //연산자 있는 상태에서 또 연산자 썼을 때 이전 연산자로, 방금 입력한 숫자로 계산
          display.textContent = calculate(previousNum, operatorForAdvanced, display.textContent);
          previousNum = display.textContent;
          //계산한 뒤 새로운 숫자
        }
      }

      operatorForAdvanced = buttonContent;
      //연산자 여러개 눌러도 계속 갱신 : 무조건 갱신

      previousKey = 'operator';

      }
    
  
    }
    if (action === 'decimal') {
      if(previousKey === 'operator'){ 
        display.textContent = '0.';
        //.으로 바로 소수점
      }else if(previousKey === 'number'&&previousKey!=='decimal'){ 
        //..방지
        //number빼면 위와 아래 겹쳐서 ..
        display.textContent += buttonContent;
      }
    
      previousKey='decimal'; 

    }
    if (action === 'clear') {
      firstNum = undefined; 
      operatorForAdvanced=undefined;
      display.textContent='0'; 
      previousNum = undefined;
    }

    if (action === 'calculate') {
      //previous는 무조건 연산자 필요. 그러므로 연산자에서 할당한 값 사용 
      if(previousKey === 'operator'){ 
        if(operatorForAdvanced){ 
          display.textContent = calculate(display.textContent,operatorForAdvanced,display.textContent);
          //operator가 있으면 
        }
      }
      if(previousKey === 'number'){
        if(operatorForAdvanced){
          display.textContent = calculate(previousNum, operatorForAdvanced, display.textContent);
          //previousNum은 마지막 operator입력 전 display
          //display.textCotent는 secondOperend 
        }
      }
      if(previousKey === 'calculate'){ 
        if(operatorForAdvanced){
          display.textContent = calculate(display.textContent, operatorForAdvanced, calculateNum);
          //계산된 값이 아니라 마지막에 입력한 값
        }
      }
     
      previousKey='calculate';
    }
  });

