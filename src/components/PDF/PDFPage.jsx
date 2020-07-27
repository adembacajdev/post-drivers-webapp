import React from 'react';
import { Page, Document, StyleSheet, View } from '@react-pdf/renderer';
import PdfItem from './PdfItem';

const PDF = ({ items }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {items.map(item => {
                    return (
                        <View style={styles.item}>
                            <PdfItem key={item.id} {...item} />
                            <View style={styles.line} />
                        </View>
                    )
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
    item: {
        width: '100%'
    },
    line: {
        width: '100%',
        height: 3,
        backgroundColor: 'grey',
        marginVertical: 6
    }
});

