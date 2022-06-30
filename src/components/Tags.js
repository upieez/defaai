import styled from 'styled-components';

export const TagsButton = styled.button`
	border: 1px solid #999999;
	color: #999999;
	width: fit-content;
	background-color: transparent;
	border-radius: 6px;
	padding: 3px 13px;
	margin-right: 6px;
`;

const Tags = ({ className, children }) => {
	return <TagsButton className={className}>{children}</TagsButton>;
};

export default Tags;
