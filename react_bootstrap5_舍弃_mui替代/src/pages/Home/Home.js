import { observer } from 'mobx-react-lite'
// import Logo from '@/components/Logo'
import { useNavigate } from 'react-router-dom'

import { Alert, Stack, Button, Badge, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'




// <div className="container">
// <h1>布局相关 <span className="fs-4">container position display(grid,flex) table width heigh margin padding border</span>
// </h1>

// <section className="bg-light mt-5">
//   <h3>.container</h3>
//   <table className="table table-bordered table-hover">
//     <thead>
//       <tr className="table-primary">
//         <th className="col-3">class</th>
//         <th className="col-6">说明</th>
//         <th>演示</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>container</td>
//         <td>


function HtmlMain () {
  const vContainerFluid = `"sm"|"md"|"lg"|"xl"|"xxl"`
  const vColXs = `0...12|auto`
  return (

    <Container>
      <h1>布局相关 <span className="fs-4">container position display(grid,flex) table width heigh margin padding border</span></h1>

      <section className="bg-light mt-5">
        <h3>Container <span className='lead'>&lt;Container/&gt;</span></h3>
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="table-primary">
              <th className="col-3">params</th>
              <th className="col-6">说明</th>
              <th>演示</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>fluid={vContainerFluid}</td>
              <td>
                <p>fluid width=100%</p>
                <p>fluid={vContainerFluid} if(vw&lt;fluid) width=100%</p>
              </td>
              <td>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mt-5">
        <h3>Row Col<span className='lead'> Row &gt; Col</span></h3>
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="table-primary">
              <th className="col-3"></th>
              <th className="col-6">说明</th>
              <th>演示</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row &gt; Col*n</td>
              <td>默认情况下 Col会平分Row</td>
              <td></td>
            </tr>
            <tr>
              <td>Row.breakpoints={vColXs}</td>
              <td>
                <p>&lt;Row {`xs={2} md={4} lg={auto}`}&gt;</p>
                <p>Row内部是flex 所以可以添加className='justify-content-md-center'等其他</p>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Col.breakpoints={vColXs}</td>
              <td>
                <p class='text-danger'>和原版bootstrap5有区别，原版小于breakpoints时平分整行，react版小于breakpoints时占满整行！！！</p>
                <p>lg 占满整行 至 平分</p>
                <p>sm lg="2" 占满整行 至 平分 至 固定2列</p>
                <p>md lg="2" 占满整行 至 平分 至 固定2列</p>
                <p><span className='text-danger'>auto</span>是根据里面内容大小占据<span className='text-danger'>更少空间</span></p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>


      <section className="mt-5">
        <h3>Stacks</h3>
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="table-primary">
              <th className="col-3"></th>
              <th className="col-6">说明</th>
              <th>演示</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>gap={`{0...5}`}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>direction="horizontal"</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
    </Container>
  )
}

function HtmlOther () {
  return (
    <>
      <h1>html其他 color opacity text anchor img</h1>
    </>
  )
}

function BootStrapMain () {
  return (
    <h1>bootstrap5组件 alert button badge progress spinner 分页/breadcrumb listgroup card 下拉菜单 折叠面板 导航 导航栏 offcanvas modal popover 表单 浮动 轮播 toast toast</h1>
  )
}



function Home () {
  const navigate = useNavigate()
  return (
    <>
      <div className="container lead">
        <pre>
          一些缩写示例:
          sm small =576px | md medium =720px | lg large =960px | xl extra large =1140px | xxl extra extra large =1320px
          1 = 0.25rem | 2 = 0.5rem | 3 = 1rem | 4 = 1.5rem | 5 = 3rem
          1rem = > 16px
          { }可选  [ ]必选
        </pre>
      </div>

      <HtmlMain />

      <Container>
        <Row>
          <Col className='bg-primary'>1 of 3</Col>
          <Col className='bg-secondary' sm={6}>2 of 3 (wider)</Col>
          <Col className='bg-success'>3 of 3</Col>
        </Row>
        <hr />
        <hr />
        <Row md={4}>
          <Col className='bg-primary'>1 of 3</Col>
          <Col className='bg-secondary' xs={6}>2 of 3</Col>
          <Col className='bg-success'>3 of 3</Col>
        </Row>  <Row xs="auto">
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>

        <hr />
        <hr />

        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="secondary">Save changes</Button>
          <Button variant="outline-secondary">Cancel</Button>
        </Stack>
      </Container>




      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <HtmlOther />
      <BootStrapMain />

      {/* <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>


      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Change this and that and try again.</p>
      </Alert> */}
    </>
  )
}

export default observer(Home)
