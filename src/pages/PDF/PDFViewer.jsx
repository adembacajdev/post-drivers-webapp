import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDFPage from '../../components/PDF/PDFPage';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Viewer = (props) => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <PDFViewer style={{ width: '100%', height: '100vh' }}>
                <PDFPage items={props.printOrder ?? []} />
            </PDFViewer>
        </div>
    )
}

const mapStateToProps = ({ printOrder }) => ({ printOrder });
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Viewer))