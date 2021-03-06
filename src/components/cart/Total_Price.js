import React from 'react'

export default function Total_Price() {
    return (
        <div className="container total_price">

            <div className="total_price_left">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-success" type="button">Button</button>
                    </div>
                </div>
            </div>

            <div className="total_price_right">
                <table class="table">


                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>

                    
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>

                    
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>

                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                    </tr>

                    <tr >
                        <td colSpan="2">
                            <button type="button" class="btn btn-primary btn-lg" style={{ width: '100%' }}>Large button</button>
                        </td>
                    </tr>

                </table>
            </div>

        </div>
    )
}
