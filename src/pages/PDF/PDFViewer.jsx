import React, { useEffect } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDFPage from '../../components/PDF/PDFPage';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { printOneOrder, printSelectedOrders } from '../../store/actions/orders';
import Auth from '../../services/auth/Auth';

const Viewer = (props) => {
    useEffect(() => {
        const type = props.match.params.type;
        if (type === 'one') {
            const printOneOrder = Auth.getOnePrintOrder();
            if (printOneOrder) props.printOneOrder(printOneOrder);
        } else if (type === 'multiple') {
            const printMultipleOrder = Auth.getMultiplePrintOrder();
            if (printMultipleOrder) {
                const parsedData = JSON.parse(printMultipleOrder)
                props.printSelectedOrders(parsedData);
            }
        }

        return () => {
            localStorage.removeItem('printOne');
            localStorage.removeItem('printMultiple');
        }
    }, [])
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <PDFViewer style={{ width: '100%', height: '100vh' }}>
                <PDFPage items={props.printOrder ?? []} />
            </PDFViewer>
        </div>
    )
}

const mapStateToProps = ({ printOrder }) => ({ printOrder });
const mapDispatchToProps = { printOneOrder, printSelectedOrders };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Viewer))