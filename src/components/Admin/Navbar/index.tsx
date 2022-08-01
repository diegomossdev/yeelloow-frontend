import React, { useState } from 'react';
import Image from 'next/image';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import YeelloowLogo from 'images/admin/yeelloow-logo.png';
import Link from 'next/link';

export const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <Button
        className="menu"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="Menu"
        placement="left"
        // onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <ul>
          <li>menu item 1</li>
          <li>menu item 2</li>
          <li>menu item 3</li>
        </ul>
      </Drawer>
      <Link href="/admin/dashboard">
        <a>
          <Image
            className="logo"
            alt="logo"
            src={YeelloowLogo}
            width={115}
            height={41.666667}
          />
        </a>
      </Link>
    </nav>
  );
};
