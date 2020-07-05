import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import PdfItem from './PdfItem';

const PDF = ({ items }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {items.map(item => {
                    return <PdfItem key={item.id} {...item} />
                })}
            </Page>
        </Document>
    )
};

export default PDF;

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
        padding: 15
    },
});

