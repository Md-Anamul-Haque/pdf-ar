import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PDF, { PDFViewer } from '../src';

describe('it', () => {
  const myDocs = new PDF();
  myDocs.text({
    text: 'this is first text'
  })

  myDocs.text({ text: 'this is my text of class', className: 'text-center' });
  myDocs.text({ text: 'this is my text of class2' });
  myDocs.text({ text: 'this is my text of class3' });
  myDocs.setPageHead({
    name: 'this is testing page',
  })
  myDocs.image({
    url: "/vite.svg",
    width: '200px',
    className: 'mx-auto block'
  })
  myDocs.table({
    head: ['username', 'userid'],
    body: [
      ['Rokan', '1'],
      ['Anamul', '2'],
    ],
    width: '300px',
    margin: '100px auto',
    classNames: {
      table: 'this-my-table'
    },
  });
  // myDocs.addPage()
  myDocs.table({
    headerLabel: {
      name: 'testing',
      lines: ['first line', 'secend line']
    },
    beforeThead: ['username', { value: 'subjects', colSpan: 4, className: 'text-center' }, 'actions'],
    head: ['username', 'bangla', 'eng', 'islam', 'math', { value: "total", colSpan: 2 }],

    body: [
      ['Rokan', '50', '60', '70', '80', '260'],
      ['Rokan', '50', '60', '70', '80', '260'],
      ['Rokan', '50', '60', 70, '80', '260'],
    ],
    foot: [{ colSpan: 4, value: 'total : ', className: 'text-right' }, "780"],
    width: '8in',
    margin: '0 auto'
  })
  // myDocs.print({
  //   height: 'auto',
  //   margin: '2rem',
  //   width: '8.4in'
  // })



  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PDFViewer docs={myDocs.get()} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
