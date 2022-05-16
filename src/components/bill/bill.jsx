const Bill = () => {
    return (
        <div className="container-fluid mt-100 mb-100">
        <div id="ui-view"><div><div className="card">
        <div className="card-header">
        
          
          Hóa đơn<strong>#BBB-245432</strong>
        <div className="pull-right mt-4 mb-4">
          <a className="btn btn-sm btn-info" href="#" data-abc="true"><i className="ti-printer mr-1"></i> Print</a>
          <a className="btn btn-sm btn-info ml-4" href="#" data-abc="true"><i className="ti-save mr-1"></i> Save</a>
        </div>
        
        
        
        </div>
        <div className="card-body">
        <div className="row mb-4">
        <div className="col-sm-4">
        <h6 className="mb-3">From:</h6>
        <div><strong>GonT.</strong></div>
        <div>144 Chi Lăng</div>
        <div>NYC, NY 12394</div>
        <div>Email: gont@gmail.com</div>
        <div>Phone: +1 848 389 9289</div>
        </div>
        
        <div className="col-sm-4">
        <h6 className="mb-3">To:</h6>
        <div><strong>Facebook Inc.</strong></div>
        <div>345, SA Road</div>
        <div>Cupertino CA 92154</div>
        <div>Email: GonT@facebook.com</div>
        <div>Phone: +1 894 989 9898</div>
        </div>
        
        <div className="col-sm-4">
        <h6 className="mb-3">Details:</h6>
        <div>Invoice<strong> #BBB-245432</strong></div>
        <div>March 22, 2020</div>
        <div>VAT: BBB0909090</div>
        <div>Account Name: BANK OF AMERICA</div>
        <div><strong>SWIFT code: 985798579487</strong></div>
        </div>
        
        </div>
        
        <div className="table-responsive-sm">
        <table className="table table-striped">
        <thead>
        <tr>
        <th className="center">#</th>
        <th>Món</th>
        <th>Mô tả</th>
        <th className="center">Số lượng</th>
        <th className="right">Giá</th>
        <th className="right">Tổng</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td className="center">1</td>
        <td className="left">Laptops</td>
        <td className="left">Macbook Air 8GB RAM, 256GB SSD</td>
        <td className="center">5</td>
        <td className="right">$900</td>
        <td className="right">$4500</td>
        </tr>
        <tr>
        <td className="center">2</td>
        <td className="left">Samsung SSD</td>
        <td className="left">Samsung SSD(256 GB)</td>
        <td className="center">20</td>
        <td className="right">$50</td>
        <td className="right">$3000</td>
        </tr>
        <tr>
        <td className="center">3</td>
        <td className="left">PEN DRIVES</td>
        <td className="left">Samsung Pendrives(32GB)</td>
        <td className="center">100</td>
        <td className="right">$10</td>
        <td className="right">$1000</td>
        </tr>
        
        </tbody>
        </table>
        </div>
        <div className="row">
        <div className="col-lg-4 col-sm-5">Cảm ơn bạn rất nhiều vì đã giúp chúng tôi trở thành thương hiệu số một trong lòng khách hàng. Chúng tôi không thể đạt được thành công này nếu không có bạn là khách hàng của chúng tôi.</div>
        <div className="col-lg-4 col-sm-5 ml-auto">
        <table className="table table-clear">
        <tbody>
        <tr>
        <td className="left"><strong>Tổng phụ</strong></td>
        <td className="right">$8500</td>
        </tr>
        <tr>
        <td className="left"><strong>Chiết khấu (20%)</strong></td>
        <td className="right">$160</td>
        </tr>
        <tr>
        <td className="left"><strong>VAT (10%)</strong></td>
        <td className="right">$90</td>
        </tr>
        <tr>
        <td className="left"><strong>Tổng</strong></td>
        <td className="right"><strong>$9000</strong></td>
        </tr>
        </tbody>
        </table>
        
        <div className="pull-right">
          <a className="btn btn-sm btn-success" href="#" data-abc="true"><i className="ti-rocket mr-1"></i> Tiến hành thanh toán</a>
        
        </div>
        
        </div>
        </div>
        </div>
        </div></div></div>
        </div>
    )
  }
  export default Bill

