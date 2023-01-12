import Script from 'next/script';

const TestPage = () => {
	return (
		<>
			<a
				target='_blank'
				href='https://squareup.com/appointments/buyer/widget/yow3ms7055ip18/L9QAGAMTXZ4C7'
				rel='noreferrer'
			>
				Book Now
			</a>
			<a
				target='_blank'
				href='https://squareup.com/appointments/book/jdn7xhbc9824qb/L9QAGAMTXZ4C7/start'
				rel='noreferrer'
			>
				Book IT Now
			</a>
			<Script src='https://squareup.com/appointments/buyer/widget/yow3ms7055ip18/L9QAGAMTXZ4C7.js' />
		</>
	);
};

export default TestPage;
