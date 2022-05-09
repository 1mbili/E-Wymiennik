class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.wallet.id_portfela}</td>
				<td>{this.props.wallet.ilość_chf}</td>
				<td>{this.props.wallet.ilość_cnh}</td>
			</tr>
		)
	}
}