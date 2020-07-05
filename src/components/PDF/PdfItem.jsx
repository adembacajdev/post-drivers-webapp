import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Create Document Component
const PdfItem = ({ serial_number, seller, buyer, product }) => (
    <View style={styles.container}>
        <View style={styles.top}>
            <View style={styles.topLeft}>
                <Image style={{ width: 110, height: 30 }} src="/logo.png" />
            </View>
            <View style={styles.topRight}>
                <Text style={styles.subtitle}>Numri i porosise</Text>
                <Text style={styles.order}>{serial_number}</Text>
            </View>
        </View>
        <View style={styles.middle}>
            <View style={styles.middleLeft}>
                <View style={styles.row}>
                    <Text style={styles.title}>Shitësi</Text>
                </View>
                <View style={styles.row}>
                    <View style={[styles.col, { borderRightWidth: 1, borderColor: '#ebebeb' }]}>
                        <Text style={styles.title}>Emri</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.subtitle}>{seller.name && seller.name}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.col, { borderRightWidth: 1, borderColor: '#ebebeb' }]}>
                        <Text style={styles.title}>Telefoni</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.subtitle}>{seller.phone && seller.phone}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.col, { borderRightWidth: 1, borderColor: '#ebebeb' }]}>
                        <Text style={styles.title}>Qyteti</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.subtitle}>{seller.city && seller.city}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.col, { borderRightWidth: 1, borderColor: '#ebebeb' }]}>
                        <Text style={styles.title}>Adresa</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.subtitle}>{seller.address && seller.address}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.middleRight}>
                <View style={styles.row}>
                    <Text style={styles.title}>Blerësi</Text>
                </View>
                <View style={styles.row}>
                    <View style={[styles.col, { borderRightWidth: 1, borderColor: '#ebebeb' }]}>
                        <Text style={styles.title}>Emri</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.subtitle}>{buyer.name && buyer.name}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.col, { borderRightWidth: 1, borderColor: '#ebebeb' }]}>
                        <Text style={styles.title}>Telefoni</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.subtitle}>{buyer.phone && buyer.phone}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.col, { borderRightWidth: 1, borderColor: '#ebebeb' }]}>
                        <Text style={styles.title}>Qyteti</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.subtitle}>{buyer.city && buyer.city}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.col, { borderRightWidth: 1, borderColor: '#ebebeb' }]}>
                        <Text style={styles.title}>Adresa</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.subtitle}>{buyer.address && buyer.address}</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.bottom}>
            <View style={styles.bottomLeft}>
                <View style={[styles.bottomLeftItem, { borderBottomWidth: 1, borderColor: '#ebebeb' }]}>
                    <View style={styles.bottomLeftItemLeft}>
                        <Text style={styles.title}>Produkti</Text>
                    </View>
                    <View style={styles.bottomLeftItemRight}>
                        <Text style={styles.title}>Pershkrimi i produktit</Text>
                    </View>
                </View>
                <View style={styles.bottomLeftItem}>
                    <View style={styles.bottomLeftItemLeft}>
                        <Text style={styles.subtitle}>{product.name && product.name}</Text>
                    </View>
                    <View style={styles.bottomLeftItemRight}>
                        <Text style={styles.subtitle}>{product.description && product.description}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomRight}>
                <View style={[styles.bottomRightItem, { borderBottomWidth: 1, borderColor: '#ebebeb' }]}>
                    <View style={styles.bottomLeftItemLeft}>
                        <Text style={styles.title}>Informata shtese</Text>
                    </View>
                    <View style={styles.bottomLeftItemRight}>
                        <Text style={styles.title}>Çmimi</Text>
                    </View>
                </View>
                <View style={styles.bottomRightItem}>
                    <View style={styles.bottomLeftItemLeft}>
                        <Text style={styles.subtitle}>{product.additional_info && product.additional_info}</Text>
                    </View>
                    <View style={styles.bottomLeftItemRight}>
                        <Text style={styles.subtitle}>{product.price && product.price}€</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
);

export default PdfItem;

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
        padding: 15,
    },
    container: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ebebeb'
    },
    top: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ebebeb'
    },
    topLeft: {
        flex: 0.5,
        justifyContent: 'center',
        paddingLeft: 10
    },
    topRight: {
        flex: 0.5,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10
    },
    middle: {
        width: '100%',
        height: 125,
        flexDirection: 'row'
    },
    middleLeft: {
        flex: 0.5,
        width: '100%',
        height: '100%',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ebebeb'
    },
    middleRight: {
        flex: 0.5,
        width: '100%',
        height: '100%',
        borderRightWidth: 1,
        borderColor: '#ebebeb'
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        height: '100%',
        borderBottomWidth: 1,
        borderColor: '#ebebeb',
        justifyContent: 'center',
        alignItems: 'center'
    },
    col: {
        flex: 0.5,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 10
    },
    bottom: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ebebeb',
        marginTop: 20,
        flexDirection: 'row'
    },
    bottomLeft: {
        flex: 0.5,
        flexDirection: 'column',
        borderRightWidth: 1,
        borderColor: '#ebebeb'
    },
    bottomRight: {
        flex: 0.5,
        flexDirection: 'column',
    },
    bottomLeftItem: {
        width: '100%',
        height: 25,
        flexDirection: 'row'
    },
    bottomRightItem: {
        width: '100%',
        height: 25,
        flexDirection: 'row'
    },
    bottomLeftItemLeft: {
        flex: 0.5,
        width: '100%',
        height: '100%',
        borderRightWidth: 1,
        borderColor: '#ebebeb',
        justifyContent: 'center',
        paddingLeft: 10
    },
    bottomLeftItemRight: {
        flex: 0.5,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        fontSize: 12,
    },
    subtitle: {
        fontSize: 10
    },
    order: {
        fontSize: 20
    }
});

const LOGOBASE64 = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNzUgNDguOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTc1IDQ4Ljk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3Qxe2ZpbGw6IzE1MUEyNjt9Cgkuc3Qye2ZpbGw6IzNDM0Y0Mjt9Cgkuc3Qze2ZpbGw6dXJsKCNQYXRoXzFfMV8pO30KCS5zdDR7ZmlsbDojRTZFNkU2O30KCS5zdDV7ZmlsbDojRDhEOEQ4O30KPC9zdHlsZT4KPGc+Cgk8ZyBjbGFzcz0ic3QwIj4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjQsMjIuNWg0LjZjMC4xLDEuOSwxLjQsMy42LDUsMy42YzMuMiwwLDQuNS0wLjksNC41LTIuN2MwLTQuMi0xMy43LTAuNi0xMy43LTkuOWMwLTQuMywzLjItNi43LDktNi43CgkJCWM2LjIsMCw4LjYsMy4xLDguNyw3LjNoLTQuNWMtMC4yLTEuNy0xLjItMy41LTQuNS0zLjVjLTIuNywwLTQuMiwwLjktNC4yLDIuN2MwLDUuMSwxMy43LDEuMiwxMy43LDEwYzAsNC41LTMsNi42LTkuMiw2LjYKCQkJQzY2LjUsMjkuOSw2NC4yLDI2LjgsNjQsMjIuNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNODMuNCwxMXYtNGgyMHY0aC03Ljh2MTguNWgtNC41VjExSDgzLjR6Ii8+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEwNS42LDcuMWg5YzYsMCw5LjIsMS45LDkuMiw3LjJjMCwzLjgtMS43LDUuOS00LjcsNi44YzAuNywwLjUsMS4zLDEuMSwxLjgsMS44bDMuOCw2LjVoLTQuOWwtMy4xLTUuNAoJCQljLTEuMi0yLjEtMi45LTIuNC01LjYtMi40SDExMHY3LjhoLTQuNVY3LjF6IE0xMTAsMTcuOWg0LjVjMi44LDAsNC42LTAuOSw0LjYtMy41YzAtMi42LTEuNy0zLjMtNC42LTMuM0gxMTBWMTcuOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTI3LjEsNy4xaDQuNXYyMi40aC00LjVWNy4xeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMzUuNSwyOS41VjcuMWg0LjV2MTAuN2w4LjgtMTAuN2g1LjZsLTguOSwxMC40bDkuOCwxMmgtNS43bC02LjktOC43bC0yLjgsMy4ydjUuNUgxMzUuNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTczLjksNy4xdjRoLTExLjh2NS4zaDkuN3YzLjhoLTkuN3Y1LjNoMTEuOHY0aC0xNi4zVjcuMUgxNzMuOXoiLz4KCTwvZz4KCTxnIGNsYXNzPSJzdDAiPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik02Ni41LDQwLjljMC0yLjcsMS41LTMuOSwzLjYtMy45YzEuOCwwLDMuMSwwLjksMy40LDIuOGgtMS42Yy0wLjItMS0xLTEuNS0xLjgtMS41Yy0xLjIsMC0yLDAuNy0yLDIuNQoJCQljMCwxLjgsMC45LDIuNSwyLDIuNWMwLjksMCwxLjYtMC41LDEuOC0xLjVoMS42Yy0wLjMsMS45LTEuNiwyLjgtMy40LDIuOEM2OCw0NC43LDY2LjUsNDMuNiw2Ni41LDQwLjl6Ii8+CgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTc1LDQwLjljMC0yLjcsMS41LTMuOSwzLjYtMy45YzIuMSwwLDMuNiwxLjIsMy42LDMuOWMwLDIuNy0xLjUsMy45LTMuNiwzLjlDNzYuNSw0NC43LDc1LDQzLjYsNzUsNDAuOXoKCQkJIE03OC42LDQzLjRjMS4yLDAsMi4xLTAuNywyLjEtMi41YzAtMS44LTAuOS0yLjUtMi4xLTIuNWMtMS4yLDAtMi4xLDAuNy0yLjEsMi41Qzc2LjUsNDIuNyw3Ny41LDQzLjQsNzguNiw0My40eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04NC4xLDQxLjJ2LTQuMWgxLjV2NC4xYzAsMS41LDAuNiwyLjIsMS42LDIuMnMxLjctMC43LDEuNy0yLjJ2LTQuMWgxLjV2NC4xYzAsMi43LTEuMywzLjUtMy4xLDMuNQoJCQlTODQuMSw0My45LDg0LjEsNDEuMnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNOTIuNiwzNy4yaDNjMiwwLDMuMSwwLjYsMy4xLDIuNGMwLDEuMy0wLjUsMi0xLjYsMi4zYzAuMiwwLjIsMC40LDAuNCwwLjYsMC42bDEuMywyLjJoLTEuNmwtMS0xLjgKCQkJYy0wLjQtMC43LTEtMC44LTEuOS0wLjhoLTAuM3YyLjZoLTEuNVYzNy4yeiBNOTQuMSw0MC44aDEuNWMwLjksMCwxLjUtMC4zLDEuNS0xLjJjMC0wLjktMC42LTEuMS0xLjUtMS4xaC0xLjVWNDAuOHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTAwLjYsMzcuMmgxLjV2Ny41aC0xLjVWMzcuMnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTA5LjcsMzcuMnYxLjNoLTMuOXYxLjhoMy4ydjEuM2gtMy4ydjEuOGgzLjl2MS4zaC01LjR2LTcuNUgxMDkuN3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTExLjUsMzcuMmgzYzIsMCwzLjEsMC42LDMuMSwyLjRjMCwxLjMtMC41LDItMS42LDIuM2MwLjIsMC4yLDAuNCwwLjQsMC42LDAuNmwxLjMsMi4yaC0xLjZsLTEtMS44CgkJCWMtMC40LTAuNy0xLTAuOC0xLjktMC44SDExM3YyLjZoLTEuNVYzNy4yeiBNMTEzLDQwLjhoMS41YzAuOSwwLDEuNS0wLjMsMS41LTEuMmMwLTAuOS0wLjYtMS4xLTEuNS0xLjFIMTEzVjQwLjh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTEyMyw0Mi4zaDEuNWMwLDAuNiwwLjUsMS4yLDEuNywxLjJjMS4xLDAsMS41LTAuMywxLjUtMC45YzAtMS40LTQuNi0wLjItNC42LTMuM2MwLTEuNCwxLjEtMi4yLDMtMi4yCgkJCWMyLjEsMCwyLjksMSwyLjksMi40aC0xLjVjLTAuMS0wLjYtMC40LTEuMi0xLjUtMS4yYy0wLjksMC0xLjQsMC4zLTEuNCwwLjljMCwxLjcsNC42LDAuNCw0LjYsMy4zYzAsMS41LTEsMi4yLTMuMSwyLjIKCQkJQzEyMy44LDQ0LjcsMTIzLjEsNDMuNywxMjMsNDIuM3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTM2LjUsMzcuMnYxLjNoLTMuOXYxLjhoMy4ydjEuM2gtMy4ydjEuOGgzLjl2MS4zaC01LjR2LTcuNUgxMzYuNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTM4LjMsMzcuMmgzYzIsMCwzLjEsMC42LDMuMSwyLjRjMCwxLjMtMC41LDItMS42LDIuM2MwLjIsMC4yLDAuNCwwLjQsMC42LDAuNmwxLjMsMi4ySDE0M2wtMS0xLjgKCQkJYy0wLjQtMC43LTEtMC44LTEuOS0wLjhoLTAuM3YyLjZoLTEuNVYzNy4yeiBNMTM5LjgsNDAuOGgxLjVjMC45LDAsMS41LTAuMywxLjUtMS4yYzAtMC45LTAuNi0xLjEtMS41LTEuMWgtMS41VjQwLjh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE0NS41LDM3LjJoMS42bDIuMiw1LjhsMi4xLTUuOGgxLjZsLTIuOCw3LjVoLTEuOUwxNDUuNSwzNy4yeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNTQuNiwzNy4yaDEuNXY3LjVoLTEuNVYzNy4yeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNTgsNDAuOWMwLTIuNywxLjUtMy45LDMuNi0zLjljMS44LDAsMy4xLDAuOSwzLjQsMi44aC0xLjZjLTAuMi0xLTEtMS41LTEuOC0xLjVjLTEuMiwwLTIsMC43LTIsMi41CgkJCWMwLDEuOCwwLjksMi41LDIsMi41YzAuOSwwLDEuNi0wLjUsMS44LTEuNWgxLjZjLTAuMywxLjktMS42LDIuOC0zLjQsMi44QzE1OS41LDQ0LjcsMTU4LDQzLjYsMTU4LDQwLjl6Ii8+CgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE3Mi4zLDM3LjJ2MS4zaC0zLjl2MS44aDMuMnYxLjNoLTMuMnYxLjhoMy45djEuM2gtNS40di03LjVIMTcyLjN6Ii8+Cgk8L2c+Cgk8ZyBpZD0iR3JvdXBfMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkuNTQzIDUwKSI+CgkJCgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iUGF0aF8xXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii01NTAuODczNSIgeTE9IjM2Ni4zNDA0IiB4Mj0iLTU0OS45OTU1IiB5Mj0iMzY3LjI3NTQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNDguNzc3IDAgMCAtNDguODQ3NiAyNjgyOC44NDE4IDE3ODkyLjg0NzcpIj4KCQkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwNTE5MyIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMTc2MkM5Ii8+CgkJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNUVDRjQiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxwYXRoIGlkPSJQYXRoXzEiIGNsYXNzPSJzdDMiIGQ9Ik0tMC44LTQ5LjZ2NDguMmMwLDAuMi0wLjEsMC4zLTAuMywwLjNoLTMyLjdjLTAuOS0wLjEtMS4xLTAuNi0xLTEuN2MwLjgtMTEuNSw0LjEtMjIuMSwxMi0zMC45CgkJCWMyLjctMyw2LTUuNSw5LjYtNy40YzAuMS0wLjEsMC4yLTAuMywwLjEtMC40Yy0wLjEtMC4xLTAuMi0wLjItMC4zLTAuMkMtMzEtMzguNi00Mi0yNy43LTQ5LTExLjRjLTAuMSwwLjItMC4yLDAuMi0wLjQsMC4yCgkJCWMtMC4xLDAtMC4yLTAuMi0wLjItMC4zYzAtNS44LDAtMTEuNiwwLTE3LjVjMC0wLjUsMC0wLjksMC4xLTEuNGMwLjEtMC40LDAuMS0wLjksMC4yLTEuM2MwLjgtNC4zLDIuOC04LjMsNS44LTExLjUKCQkJYzIuNC0yLjUsNS4zLTQuNSw4LjYtNS43YzAuOC0wLjMsMS43LTAuNSwyLjUtMC43YzAuMy0wLjEsMC43LTAuMiwxLTAuMmMwLjQsMCwwLjgtMC4xLDEuMi0wLjFjMS42LTAuMSwzLjMsMCw0LjksMGg1LjFsMTAuMiwwCgkJCWMwLjksMCwxLjcsMCwyLjYsMGg2LjJDLTAuOS01MC0wLjgtNDkuOC0wLjgtNDkuNkMtMC44LTQ5LjctMC44LTQ5LjctMC44LTQ5LjZ6Ii8+CgkJPHBhdGggaWQ9IlBhdGhfMiIgY2xhc3M9InN0NCIgZD0iTS0yMi45LTM2LjVsLTAuMywwLjNjLTAuOCwwLjktMS43LDEuOC0yLjQsMi44Yy0zLjQsNC4yLTYsOC45LTcuOCwxNGMtMS45LDUuMy0zLDEwLjgtMy4zLDE2LjQKCQkJYy0wLjEsMi0wLjEsMi0yLjIsMmMtMywwLTYuMSwwLTkuMSwwYy0xLDAtMS4zLTAuMy0xLTEuMmMzLjItMTUuMSwxMS4yLTI2LjcsMjUtMzMuOUMtMjMuNy0zNi41LTIzLjQtMzYuOC0yMi45LTM2LjV6Ii8+CgkJPHBhdGggaWQ9IlBhdGhfMyIgY2xhc3M9InN0NSIgZD0iTS0yNC4xLTM1LjJsMS4xLTEuMmMwLjEtMC4xLDAuMS0wLjIsMC0wLjNjLTAuMS0wLjEtMC4yLTAuMS0wLjMsMGwtMS40LDAuOAoJCQljLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMCwwLDAsMCwwbDAuMywwLjRDLTI0LjQtMzUuMS0yNC4yLTM1LjEtMjQuMS0zNS4yQy0yNC4xLTM1LjItMjQuMS0zNS4yLTI0LjEtMzUuMnoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K'