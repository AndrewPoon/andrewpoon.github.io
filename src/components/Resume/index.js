import React from 'react';
import { Document, Page,Text} from '@react-pdf/renderer';
import url from './Resume.pdf'

export default function Resume() {
  return (
    <object data={url} type="application/pdf" width="100%" height="100%">
        </object>
  );
}

