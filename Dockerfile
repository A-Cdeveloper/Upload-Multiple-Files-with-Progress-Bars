# 1. Baza sa tvojom verzijom Node-a
FROM node:24.4.0-alpine

# 2. Radni direktorijum
WORKDIR /app

# 3. Kopiraj samo dependency fajlove i instaliraj
COPY package*.json ./
RUN npm install

# 4. Kopiraj ceo projekat
COPY . .

# 5. Build za produkciju (Vite pravi `dist/`)
RUN npm run build

# 6. Instaliraj server da servira `dist/` kao statički sajt
RUN npm install -g serve

# 7. Pokreni app na portu 3000
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
