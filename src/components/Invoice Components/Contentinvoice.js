import React from 'react';

const Invoice = () => {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Invoice</title>
        <style>
          {/* Masukkan semua gaya CSS di sini */}
        </style>
      </head>
      <body>
        <header>
          <h1>Invoice</h1>
          <address contenteditable>
            <p>Jonathan Neal</p>
            <p>101 E. Chapman Ave<br />Orange, CA 92866</p>
            <p>(800) 555-1234</p>
          </address>
          <span>
            <img alt="" src="http://www.jonathantneal.com/examples/invoice/logo.png" />
            <input type="file" accept="image/*" />
          </span>
        </header>
        <article>
          <h1>Recipient</h1>
          <address contenteditable>
            <p>Some Company<br />c/o Some Guy</p>
          </address>
          <table className="meta">
            <tr>
              <th><span contenteditable>Invoice #</span></th>
              <td><span contenteditable>101138</span></td>
            </tr>
            <tr>
              <th><span contenteditable>Date</span></th>
              <td><span contenteditable>January 1, 2012</span></td>
            </tr>
            <tr>
              <th><span contenteditable>Amount Due</span></th>
              <td>
                <span id="prefix" contenteditable>$</span>
                <span>600.00</span>
              </td>
            </tr>
          </table>
          <table className="inventory">
            <thead>
              <tr>
                <th><span contenteditable>Item</span></th>
                <th><span contenteditable>Description</span></th>
                <th><span contenteditable>Rate</span></th>
                <th><span contenteditable>Quantity</span></th>
                <th><span contenteditable>Price</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a className="cut">-</a><span contenteditable>Front End Consultation</span></td>
                <td><span contenteditable>Experience Review</span></td>
                <td><span data-prefix="$"></span><span contenteditable>150.00</span></td>
                <td><span contenteditable>4</span></td>
                <td><span data-prefix="$"></span><span>600.00</span></td>
              </tr>
            </tbody>
          </table>
          <a className="add">+</a>
          <table className="balance">
            <tr>
              <th><span contenteditable>Total</span></th>
              <td><span data-prefix="$"></span><span>600.00</span></td>
            </tr>
            <tr>
              <th><span contenteditable>Amount Paid</span></th>
              <td><span data-prefix="$"></span><span contenteditable>0.00</span></td>
            </tr>
            <tr>
              <th><span contenteditable>Balance Due</span></th>
              <td><span data-prefix="$"></span><span>600.00</span></td>
            </tr>
          </table>
        </article>
        <aside>
          <h1><span contenteditable>Additional Notes</span></h1>
          <div contenteditable>
            <p>A finance charge of 1.5% will be made on unpaid balances after 30 days.</p>
          </div>
        </aside>
      </body>
    </html>
  );
}

export default Invoice;
