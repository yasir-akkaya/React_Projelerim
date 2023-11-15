import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagCounts: {}
        };
    }

    componentDidMount() {

        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {

                if (data) {

                    const tagCounts = data.reduce((counts, product) => {
                        product.tag.forEach(tag => {
                            counts[tag] = (counts[tag] || 0) + 1;
                        });
                        return counts;
                    }, {});
                    this.setState({ tagCounts: tagCounts });
                }
            })

    }

    render() {
        const { tagCounts } = this.state;

        return (
            <div>

                {Object.entries(tagCounts).map(([tag, count], index) => (
                    <Button key={index} href="test" outline color='secondary' className='m-1' size='sm'>
                        {tag} ({count})
                    </Button>
                ))}
            </div>
        );
    }
}

export default Tags;