import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './BaiTapThucHanhLayout/Header';
import Body from './BaiTapThucHanhLayout/Body';
import Footer from './BaiTapThucHanhLayout/Footer';

import './assets/scss/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(// in ra giao diện thông qua id là: root , mà không cần liên kết script bằng src 
    <div>
<Header/>
<Body/>
<Footer/>
    </div>
);