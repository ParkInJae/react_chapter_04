# gitHub 와 VSCode 연결
  
![alt text](image.png)

 1. git init (초창기)
 2. git add . 
 3. git commit -m "first commit"
 4. git branch -M main // branch를 main으로 생성 
 if git branch -m master로 작성했다면 branch명이 master로 생성
 5. git remote add origin https://github.com/ParkInJae/react_chapter_04.git
 (git remote add origin 나의 repository 주소 )

 6.
   6-1 git push origin main // branch를 main으로 생성했을 때 

   6-2  git push origin master // branch를 master로 생성했을 때 
 
 # 에러 발생 
 -- warning: in the working copy of 'README.md', LF will be replaced by CRLF 
the next time Git touches it 

->  Git이 파일의 줄바꿈 방식(LF와 CRLF)을 자동으로 변환하려고 할 때 발생하는 일반적인 알림입니다.

보통 Windows에서는 기본적으로 CRLF를 사용하고, Unix/Linux나 macOS에서는 LF를 사용하기 때문에 이런 차이가 발생함. 

# 해결방법 
<h2>Git 설정 변경하기 </h2>

1. Windows 환경
git config --global core.autocrlf true


2. macOS/Linux 환경 
git config --global core.autocrlf input


