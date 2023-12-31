/** @type {(tailwindConfig: object) => object} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                primaryColor: '#007AFE',
                inputColor: '#F5F5F5',
                textColor: '#252525',
                bgColor: '#E8F0FA',
            },
            fontFamily: {
                'chewy': ['Chewy']
            }
        },
    },
    plugins: [],
})