
class EmployeeList extends React.Component{
	render() {
		const employees = this.props.employees.map(wallets =>
			<Employee key={wallets._links.self.href} wallets={wallets}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
	}
}