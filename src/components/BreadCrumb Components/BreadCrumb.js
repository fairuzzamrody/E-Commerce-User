import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

const BreadCrumb = () => {
  const location = useLocation();

  // Mendapatkan path halaman yang sedang ditampilkan
  const pathnames = location.pathname.split('/').filter((pathname) => pathname !== '');

  return (
    <div className="container" style={{ marginBottom: '40px'}}>
      <Breadcrumb>
        {/* Pastikan path untuk halaman beranda sesuai */}
        <Breadcrumb.Item as={Link} to="/">Beranda</Breadcrumb.Item>
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <Breadcrumb.Item
              key={pathname}
              as={isLast ? 'span' : Link}
              to={isLast ? undefined : routeTo}
              active={isLast}
            >
              {pathname}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumb;
