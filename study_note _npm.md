
## npm을 시작하는 방법
  * package.json 을 수동으로 만들어 주기 
  * npm init 

## package.json
  * package.json 파일은 프로젝트에 대한 정보를 갖고 있는 파일
  *  `dependencies`와 같은 속성을 활용하여 프로젝트에 의존된 라이브러리를 관리
  *  package.json 파일은 직접 작성할 수도 있고, `npm init` 명령어를 통하여 자동으로 생성

## package.json 속성 
  * name 
    * 프로젝트 이름으로 가장 중요하다. (필수항목) 
  * version 
    * 프로젝트 버전을 정의한다. 주로 3단계 버전을 사용한다. (필수항목)
  * description 
    * 프로젝트 설명을 기술한다. 
    * npm search로 검색된 리스트에 표시되기 때문에 사람들이 패키지를 찾아내고 이해하는 데 도움이 된다.
  * keywords
    * 프로젝트를 검색할 때 참조되는 키워드이다.
    * description과 마찬가지로 npm search로 검색된 리스트에 표시된다.
  * private 
    *  true 로 설정되면 npm 게시를 거부합니다.
    *  이 값은 개인 리포지토리가 실수로 게시되는 것을 방지합니다.
  * main 
    * main은 프로그램의 기본 진입점 입니다.
  * scripts
    *  프로젝트에서 자주 실행하는 명령어를 scripts로 작성해두면 npm 명령어로 실행 가능하다.
  * author
    * 제작자의 이름을 지정합니다.
  * license
    * 패키지에 대한 라이선스를 지정
    * 사람들이 패키지를 사용할 수 있는 방법과 패키지에 대한 제한 사항을 알 수 있도록 함.
  * dependencies
    * 프로젝트에서 사용하는(의존하는) 모듈을 기술하는 부분
    * 이 프로젝트가 어떤 모듈을 사용하는지 한눈에 볼 수 있다.
    * 애플리케이션을 설치할 때 이 내용을 참조하여 필요한 확장 모듈을 자동으로 설치한다.
    * 따라서 개발한 애플리케이션에서 사용하는 모듈은 여기에 꼭 명시를 해주어야 한다. 
  * devDependencies
    * 개발할 때만 의존하는 모듈을 관리한다.

## node_modules 디렉토리 
  * `node_modules` 디렉토리에는 `package.json` 에 설치된 모듈 뿐만 아니라, `package.json`에 있는 모듈이 의존하고 있는(`package-lock.json`) **모듈 전부가 설치된 디렉토리**이다. 

## package-lock.json 파일 
  * 프로젝트에 설치된 모듈들의 의존성 트리를 기록하고 있으며, `package-lock.json` 파일을 참고하여 `node_modules` 디렉토리안에 모듈을 다운받습니다.

## npm 명령어 
  * npm init
    * 새로운 프로젝트(패키지)를 시작할 때 사용하는 명령어로 package.json 파일을 생성
  * npm init -y 
    * -y 옵션을 사용하여 기본값을 자동으로 설정할 수 있음
  * npm install <패키지명> (축약 i)
    * 패키지(= 라이브러리, 모듈)를 설치하는 명령어임. (로컬 설치)
  * npm install <패키지명@버전> 
    * 버전과 함께 사용하면 특정 버전을 설치할 수 있음
  * npm install --save  ( 축약 -S )
    * --save 옵션을 사용하면 dependencies에 추가됨
    *  npm@5 버전 이후부터는 디폴트로 --save 옵션이 적용됨. (생략해도 무방)
  * npm install --save-dev (축약 -D)
    * 사용하면 devDependencies에 추가됨
  * npm install --production 
    * 프로덕션용설치 devDependency 는 설치 하지 않음. 
  * npm install <패키지명1> <패키지명2>
    * 여러개를 설치할 수 있음
  * npm install -g <패키지명> 
    * 전역 설치를 할 수 있습니다. (또는 --global) 
  * npm install
    * package.json에 설정된 모든 패키지를 설치
  * npm install --production
    * package.json에 설정된 모든 패키지를 설치 (devDependencies 제외) 
  * npm uninstall <패키지명>
    * 로컬 패키지 삭제 
  * npm uninstall -g <패키지명> 
    * 전역 패키지 삭제
  * npm update <패키지명> 
    * 설치한 패키지를 업데이트 합니다. 
  * npm root
    * 로컬 패키지 설치 디렉토리 확인
  * npm root -g 
    * 전역 패키지 설치 디렉토리 확인 
  * npm ls 
    * 로컬 설치된 패키지 확인
  * npm ls -g 
    *  전역 설치된 패키지 확인 
  * npm start 
    * package.1json 파일의 script 속성의 start 실행
    * npm run start = npm start 
  * npm run <script-name>
    * package.json 파일의 script 속성의 start외 스트립트 실행 

## 버전
  * 기본적으로 버전은 `[MAJOR , MINOR, PATCH]` 로 구성되어 있음
  * 이러한 표기법은 **시맨틱 버저닝(Semantic Versioning)** 규칙을 따름
  * `package.json` 에 버전 명시를 다음과 같이 할 수 있다
    * `1.2.3` `>1.2.3` `>=1.2.3` `<1.2.3` `<=1.2.3` `~1.2.3` `^1.2.3`

## 시맨틱 버저닝(***Semantic Versioning***)
  * 시맨틱 버저닝(Semantic Versioning)은 소프트웨어의 버전 변경 규칙에 대한 제안임. 
  * `[MAJOR , MINOR, PATCH]` (ex. 1.0.2)
    * `MAJOR` - 주요변화, 기존 API 추가/변경/삭제 등, 이전 버전과 호환이 안될 수 있음
    * `MINOR` - 기능추가, 이전 버전과 호환됨
    * `PATCH` - 버그수정, 이전 버전과 호환됨
  
### 틸드(~)
  * 틸드는 현재 지정한 버전의 마지막 자리 내의 범위에서만 자동으로 업데이트 함. 
    * `~0.0.1`  : ****`>=0.0.1 <0.1.0`
    * `~0.1.1`  : `>=0.1.1 <0.2.0`
    * `~0.1`  : `>=0.1.0 <0.2.0`
    * `~0`  : `>=0.0 <1.0`

#### 캐럿(^)
  * **캐럿(`^`)은 Node.js 모듈이 이 SemVer의 규약을 따른다는 것을 신뢰한다는 가정하에서 동작.**
  * 그래서 MINOR나 PATCH버전은 하위호환성이 보장되어야 하므로 업데이트를 한다.
    * `^1.0.2` : `>=1.0.2 <2.0`
    * `^1.0` : `>=1.0.0 <2.0`
    * `^1` : `>=1.0.0 <2.0`
