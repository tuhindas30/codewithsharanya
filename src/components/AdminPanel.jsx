const AdminPanel=()=>{
return (
    <div style={{paddingInline:"4rem"}}>

    <h1 className="py-2">Dashboard</h1>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Soumen</th>
      <td>soumenmajumder@gmail.com</td>
      <td>9808796756</td>
      <td>
        <button type="button" class="btn btn-primary me-2">
            <i class="bi bi-pencil-fill"></i>
            </button>
        <button type="button" class="btn btn-primary">
            <i class="bi bi-trash-fill"></i>
            </button>
            </td>
    </tr>
    
  </tbody>
</table>
</div>
)
}
export default AdminPanel

