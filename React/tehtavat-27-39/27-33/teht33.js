import React from "react";


const Teht33 = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <div style={{ display: 'flex', flex: 1 }}>
                <LeftSide style={{ flex: 1 }} />
                <Center style={{ flex: 2 }} />
                <RightSide style={{ flex: 1 }} />
            </div>
            <Footer />
        </div>
    );

}

const Header = () => (
    <div style={{ backgroundColor: 'lightblue', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Welcome to main page of Savonia AMK</h1>
    </div>
);

const LeftSide = () => (
    <div style={{ backgroundColor: 'lightgreen', padding: '10px', textAlign: 'left', height: '100%' }}>
            <h1>Please log in!</h1>
        </div>
);

const Center = () => (
    <div style={{ backgroundColor: 'lightyellow', padding: '10px', textAlign: 'left', height: '100%' }}>
            <h1>Introduction of our company ...</h1>
        </div>
);
const RightSide = () => (
    <div style={{ backgroundColor: 'lightcoral', padding: '10px', textAlign: 'left', height: '100%' }}>
    <h1>Lot's of info about our company ..</h1>
</div>
);
const Footer = () => (
    <div style={{ backgroundColor: 'lightgrey', padding: '10px', textAlign: 'center' }}>
            <h1>Copyright by ktkoiju@Savonia</h1>
        </div>
);

export { Teht33, Header, LeftSide, Center, RightSide, Footer };