import Header from './header';
import style from './layout.module.scss';

export default function Layout(props) {
    return (
      <>
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
          @font-face {
            font-family: 'Nunito';
            src: url('../../static/Nunito-Regular.ttf');
            font-display: auto;
            font-style: normal;
          }
          body {
            margin: 0;
            padding: 0;
            font-size: 18px;
            font-weight: 400;
            line-height: 1.8;
            color: #0c350f;
            background-color: #E8F5E9;
            background-size: cover;
            font-family: 'Nunito', sans-serif;
          }
        `}</style>
      </div>
      <Header></Header>
      </>
    )
  }
  
