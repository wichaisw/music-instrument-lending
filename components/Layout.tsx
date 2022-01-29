import React, { ReactNode } from 'react';
import Header from './Header';

type Props = {
  children: ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
    </div>
  )
}

export default Layout;
