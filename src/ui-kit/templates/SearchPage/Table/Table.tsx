import React from 'react';
import * as Styled from './styled';
import { ITableProps } from './types';
import { PrimaryButton } from 'ui-kit/atoms';
import { NavLink } from 'react-router-dom';

export const Table = ({ columnNames, rows, editRoute }: ITableProps) => {
  const widthButton = !!editRoute;

  return (
    <Styled.Container>
      <Styled.Table>
        <thead>
          <Styled.Row>
            {columnNames.map((name) => (
              <Styled.HeaderCell key={name}>{name}</Styled.HeaderCell>
            ))}
          </Styled.Row>
        </thead>
        <tbody>
          {rows.map((row) => (
            <Styled.Row key={row[0]}>
              {row.map((item, index) => (
                <Styled.Cell key={`${item}-${index}`}>{item}</Styled.Cell>
              ))}
              {widthButton && (
                <Styled.Cell>
                  <PrimaryButton as={NavLink} to={editRoute}>
                    Редактировать
                  </PrimaryButton>
                </Styled.Cell>
              )}
            </Styled.Row>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.Container>
  );
};