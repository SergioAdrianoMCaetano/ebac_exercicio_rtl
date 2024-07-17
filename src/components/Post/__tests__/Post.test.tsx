//CRIAR O ARQUIVO DE TESTE
import { render, screen, fireEvent } from '@testing-library/react';
import Post from '../index';

test('inserts two comments correctly', () => {
    const imageUrl = 'https://via.placeholder.com/150';
    const postText = 'This is a sample post';

    render(<Post imageUrl={imageUrl}>{postText}</Post>);

    // Simulate adding the first comment
    fireEvent.change(screen.getByTestId('post-comments-form-textarea'), {
        target: { value: 'First comment' },
    });
    fireEvent.submit(screen.getByTestId('post-comments-form'));

    // Simulate adding the second comment
    fireEvent.change(screen.getByTestId('post-comments-form-textarea'), {
        target: { value: 'Second comment' },
    });
    fireEvent.submit(screen.getByTestId('post-comments-form'));

    // Verify the comments are added
    const comments = screen.getAllByTestId('post-comment-content');
    expect(comments).toHaveLength(2);
    expect(comments[0]).toHaveTextContent('First comment');
    expect(comments[1]).toHaveTextContent('Second comment');
});
