FROM node:12

# 앱 디렉터리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해 와일드카드 사용
COPY package.json ./

RUN npm install
# 파일 추가
COPY . .            

EXPOSE 3001
CMD [ "node", "lib/server.js" ]