![xd-plugin](https://yuki-sakaguchi.github.io/xd-font-data-to-css/design/xd.png)

# [Convert font data to CSS for XD](https://exchange.adobe.com/apps/cc/0d8bbfb7)
line-heightやletter-spacingを計算してコピーしてくれるプラグインです。  

以下の記事を見て、自分で計算するのが面倒なので作りました。。  
計算式はそのままお借りしてます。  

[なんでなん？XDデザインのフォント行間/文字送りとCSSの違い。](https://note.com/lby/n/ne71f93c72702)  

ストアにも公開済です。  
XDの「プラグインを見つける」で「font」とかで調べると出てくると思うのでぜひ使ってみてください。  
    

# 使い方
テキストにフォーカスした状態で以下のショートカットキーを叩く。  

## Cmd+Alt+A
フォントデータ全般をクリップボードにコピーします。  
ショートカットの覚え方は`all`の`A`です。  
  
コピーしたスタイルはこんな感じになります。  

```css
font-style: Hiragino Kaku Gothic ProN;
font-weight: W3;
font-size: 40px;
color: #707070;
letter-spacing: 0.012em;
line-height: 2;
```

## Cmd+Alt+C
`letter-spacing`をクリップボードにコピーします。  
ちゃんとcssとして使える値に計算したものがコピーされます。  
ショートカットの覚え方は`char spacing`の`C`です。（line-heightとLが被ってたので...）  

```css
letter-spacing: 0.012em;
```

## Cmd+Alt+L
`line-height`をクリップボードにコピーします。  
ちゃんとcssとして使える値に計算したものがコピーされます。  
ショートカットの覚え方は`letter spacing`の`L`です。  

```css
line-height: 2;
```
