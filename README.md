# manekomo
## 起動方法
manekomoがrootディレクトリ
`cd backend`
`npm start`
`cd frontend`
`npm run dev`


## frontend  
  React(Typescript)   
    http://localhost:5173  
  Reference:  
    Vite  
      https://ja.vitejs.dev/guide/  
    react-router  
      https://reactrouter.com/en/main/start/overview  
    bootstrap  
      https://getbootstrap.jp/  

  Directory:  
    /src  
    -  /img  
        画像置き場  
    -  /css  
        プラスのcss(bootstrap優先)   
    -  /types  
        全てに共通するデータの統一（色、フォントなど）  
    -  /views  
    --    /components  
          色々共通する部分（ヘッダーなど）を置いておきインポートして使用  
    --    /pages  
    ---      /App.tsx  
            スタートページ  
    ---      /game  
            第1フェーズの開発  
    ---      /question  
            あとで  
    ---      /learning  
            あとで  



共有するときに使えそう  
https://qiita.com/sugurutakahashi12345/items/1f6bb7a372b8263500e5  




## backend  
  Express(Typescript)  
    http://localhost:3000  
調整中  


## database  
  MySQL  
  調整中