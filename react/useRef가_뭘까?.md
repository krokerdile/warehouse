# useRef가 뭘까? 
자바스크립트를 사용하게 되면, 특정 DOM을 선택해줘야 되는 경우가 있습니다. 그래서 자바스크립트에서는 getElementById나 querySelector를 사용해서 DOM을 직접 선택해줍니다.

리액트에서도 이와 같이 DOM을 선택하야 되는 경우가 있습니다. 외부 라이브러리를 사용하거나, 특정 엘리먼트의 크기를 가져오거나, 스크롤바의 위치를 가져와야 되는 경우가 있습니다.

이럴 때 리액트에서는 ref 라는 친구를 사용해주게 됩니다. 

ref 라는 친구는 referece의 줄임말이고 이름만 참고해서 보면 DOM 요소에 이름표를 붙여서 참고하겠다라는 의미인 것 같습니다. Ref는 일반객체이고 console.log로 찍어보게 되면 {current:null}이라는 객체가 나오고 이 객체를 통해서 내가 이름표를 붙인 DOM에 접근을 할 수 있게 됩니다. 

그래서 이 친구를 사용해줄 때는 useRef라는 Hook 함수를 사용하게 됩니다. 

```jsx
//[참고자료] InputSample()

import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
    const nameInput = useRef(null);

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```

이걸 이제 테스트 해보기 위해서 벨로퍼트님 [자료](https://react.vlpt.us/basic/10-useRef.html)를 참고해서 코드를 작성해봤습니다. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/0483f3fb-e84e-43e6-b3c7-d93e74749b98/6655ffbd-2b10-454a-9119-96c4bcf24ce4/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/0483f3fb-e84e-43e6-b3c7-d93e74749b98/466c23c7-774d-4946-9f4b-8817f5917102/Untitled.png)

왼쪽 인풋 태그 두 개 중 왼쪽 아이디에 값을 입력하고 비밀번호에 값을 입력하면 focus가 비밀번호에 잡혀있는 걸 확인 할 수 있습니다. 이 다음에 초기화를 해주면, setState를 통해 두 개의 값을 초기화 해주고, focus가 왼쪽 Id 인풋 태그에 들어가는 것을 확인 할 수 있습니다. 이런 느낌으로 DOM에 직접 이름표를 달고 변경을 해줄 수 있다는 것을 확인 할 수 있습니다. 

### useRef 대신에 객체를 직접 선언하는 방식은 안될까?

```jsx
const nextId = { current: 4 };
```

> useRef는 일반적인 자바스크립트 객체입니다 즉 heap 영역에 저장됩니다 그래서 어플리케이션이 종료되거나 가비지 컬렉팅 될 때 까지 참조할 때 마다 같은 메모리 주소를 가지게 되고 같은 메모리 주소를 가지기 때문에 `===` 연산이 항상 true를 반환하고, 값이 바뀌어도 리렌더링 되지 않습니다. 하지만 함수 컴포넌트 내부에 변수를 선언한다면, 렌더링 될 때마다 값이 초기화 됩니다.

> useRef의 반환값 처럼 사용하기 위해 위의 코드 처럼 작성을 하더라도 컴포넌트는 컴포넌트의 state나 prop가 바뀔 때 마다 리렌더링 되고, 함수형 컴포넌트는 일반 자바스크립트 함수와 마찬가지로 호출될 때 마다 함수 내부에 정의된 로컬 변수들을 초기화 해준다고 합니다.

> useRef의 경우에는 React가 만든 전역 저장소에 저장 되기 때문에 리렌더링과 관계없이 마지막으로 업데이트 된 current 값이 유지 됩니다. 

> https://ko.reactjs.org/docs/hooks-reference.html#useref

**위의 글들은 https://react.vlpt.us/basic/12-variable-with-useRef.html 을 정리한 글임다!**
> 

### 그래서 어디에 useRef를 사용하는 걸까?

위와 같은 점들을 바탕으로 봤을 때 위에서 언급되듯이 외부 라이브러리의 컴포넌트에 직접 접근 해야되거나 고정된 변화의 기준이 있는 상황(포커스를 줘야 되거나, 위치를 저장해야 되거나, 값을 들고오거나)에 대해서 사용을 하면 좋을 것 같습니다. **(이건 좀 더 구체적으로 찾아보기)**

만약 지금 하고 있는 ZZAUG 프로젝트에 적용한다면 질문글을 쓰는 과정에서는 글에 대한 부분은 저장 하는 버튼이 따로 있기 때문에 그와 별개로 처리를 한다면 사용을 하면 좋지 않을까 라는 생각이 드는데, 좀 더 깊은 이해가 필요해 보입니다.

## 참고자료

---

[[React] useRef - 필요성,  필요한 상황, 사용법](https://velog.io/@fejigu/React-useRef-필요성-필요한-상황-사용법)

[[React의 모든것] Ref란?](https://velog.io/@wnsaud9322/React의모든것-Ref란)

[12. useRef 로 useRef 로 컴포넌트 안의 변수 만들기 · GitBook](https://react.vlpt.us/basic/12-variable-with-useRef.html)

[10. useRef 로 특정 DOM 선택하기 · GitBook](https://react.vlpt.us/basic/10-useRef.html)