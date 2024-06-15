"use client";

export default function BeforePrint() {
  function onPrint() {
    window.print();
  }

  return (
    <button className="print:hidden" onClick={onPrint}>
      Print
    </button>
  );
}
