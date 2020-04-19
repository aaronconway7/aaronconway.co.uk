import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const PostPreview = ({ hit: post }) => {
    return (
        <StyledPostPreview className={`post`}>
            <span className={`date`}>{post.date}</span>
            <LineThroughLink to={`/blog/${post.slug}`} className={`title`}>
                {post.title}
            </LineThroughLink>
            <span className={`reading-time`}>
                <Emoji emoji={`🕑`} label={`clock`} />
                {post.content.fields.readingTime.text}
            </span>
        </StyledPostPreview>
    )
}

export default PostPreview

const StyledPostPreview = styled.li`
    ${tw`grid`}

    .date {
        ${tw`text-xs opacity-50`}
    }

    .title {
        ${tw`font-semibold text-2xl`}
        width: max-content;
    }

    .caption {
        ${tw`opacity-75`}
    }

    .reading-time {
        ${tw`text-xs opacity-50`}
    }
`
