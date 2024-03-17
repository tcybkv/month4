
function Title() {
  return (
      <>
        <p>Title</p>
      </>
  )
}

function Header() {
  return (
      <>
        <h2>Header</h2>
        <Title/>
      </>
  )
}

function Content() {
  return (
      <>
        <h2>Content</h2>
        <Title/>
      </>
  )
}

function Footer() {
  return (
      <>
        <h2>Footer</h2>
        <Title/>
      </>
  )
}

function App() {
    return (
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
