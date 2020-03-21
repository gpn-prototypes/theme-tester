import React, { useContext } from 'react';
import block from 'bem-cn';
import { Button, Text, ChoiceGroup, Input, User } from '@gpn-design/uikit';
import { ThemeContext } from '../../context/ThemeContext';

import './styles.css';

const b = block('main');
const d = block('decorator');
const ls = block('pt-list');
const tb = block('pt-table');

const tableData = [
  { name: 'Приобское', src: 'Приобское', role: 'Геолог', author: 'Мария Дымочкина', made: '12 февраля 2020' },
  { name: 'Уренгой газ', src: 'Уренгойское газонефтеконденстаное', role: 'Геолог', author: 'Андрей Анашкин', made: '21 января 2020' },
  { name: 'Приобское', src: 'Приобское', role: 'Менеджер продукта', author: 'Вадим Матвеев', made: '15 декабря 2019' },
  { name: 'Месояха', src: 'Месояхское газонефтеконденстаное', role: 'Геолог', author: 'Илья Колебаев', made: '2 ноября 2019' },
  { name: 'Приобское', src: 'Приобское', role: 'Менеджер продукта', author: 'Мария Дымочкина', made: '5 октября 2019' },
  { name: 'Месояха', src: 'Месояхское', role: 'Инженер', author: 'Андрей Анашкин', made: '4 октября 2019' },
];

const Main = (props) => {
  const { className } = props;
  const { changeTheme } = useContext(ThemeContext);

  return (
    <div className={b()}>
      <div className={b('aside').mix( d({'space-t': 'xl', 'space-h': 'xl'}) )}>
        <User 
          type='button' size='m' view='clear' 
          name='Мария Дымочкина' info='Dymochkina.MG@gazprom-neft.ru' 
          avatar='https://pbs.twimg.com/profile_images/1150453787603156992/DoiKLDMY_400x400.png'
          className={ b('user').mix( d({'indent-b': '2xl'})) }
        />
        <div className={ls({'space-h': 's', 'space-v': 'xs'}).mix(d({'space-b': 'xs', 'border': 'b', 'indent-b': 'xs'}))}>
          <div className={ls('item').mix( b('list-item') )}>
            <Text tag='p' size='m' view='primary'>Все проекты</Text>
          </div>
          <div className={ls('item').mix( b('list-item', {view: 'active'}) )}>
            <Text tag='p' size='m' view='primary'>Мои проекты</Text>
          </div>
          <div className={ls('item').mix( b('list-item') )}>
            <Text tag='p' size='m' view='primary'>Избранное</Text>
          </div>
        </div>
        <div className={ls({'space-h': 's', 'space-v': 'xs'}).mix(d({'indent-b': '2xl'}))}>
          <div className={ls('item').mix( b('list-item') )}>
            <Text tag='p' size='m' view='primary'>Обучение</Text>
          </div>
          <div className={ls('item').mix( b('list-item') )}>
            <Text tag='p' size='m' view='primary'>Помощь</Text>
          </div>
        </div>

        <div className={d({'indent-b': 'xs'})}>
          <Button wpSize='m' view='primary' width='full'>Создать новый проект</Button>
        </div>
        <div className={d({'indent-b': 'xs'})}>
          <Button wpSize='m' view='ghost' width='full' onClick={ changeTheme }>
            Открыть проект
          </Button>
        </div>
      </div>
  
      <div className={b('content').mix( d({'space-t': 'm', 'space-h': '2xl'}) )}>

        <div className={ d({'distribute': 'between', 'vertical-align': 'center', 'indent-b': '2xl'}) }>
          <div className={ d({'distribute': 'between', 'vertical-align': 'center'}) }>
            <Text tag='h1' size='3xl' view='primary' weight='full' lineHeight='xs'
              className={ d({'indent-r': 'xl', 'indent-b': 'xs'}) }
            >
              Мои проекты
            </Text>
            <ChoiceGroup
							isMultiple={false}
							items={[
                {
                  value: 1,
                  label: 'Таблица'
                },
                {
                  value: 2,
                  label: 'На карте',
                },
              ]}
							wpSize='s'
							value={1}
						/>
          </div>
          <div className={ d({'distribute': 'between', 'vertical-align': 'center'}) }>
            <Input view='default' wpSize='s' placeholder='Введите название проекта или имя автора' className={b('search')} />
          </div>
        </div>

        <table className={
          tb({
            'view': 'default',
            'vertical-align': 'top',
            // 'border': 'between',
            'stripe': 'odd',
            'space-h': 'm',
            'space-v': 'xs'
          }).mix(b('table'))}
        >
          <thead>
            <tr className={tb('row', {'view': 'head'}).mix(b('table-head'))}>
              <th className={tb('col', { align: 'left' })}>
                <Text tag='p' size='xs' view='secondary' transform='uppercase' weight='regular' spacing='xs'>Название проекта</Text>
              </th>
              <th className={tb('col', { align: 'left' })}>
                <Text tag='p' size='xs' view='secondary' transform='uppercase' weight='regular' spacing='xs'>Месторождение</Text>
              </th>
              <th className={tb('col', { align: 'left' })}>
                <Text tag='p' size='xs' view='secondary' transform='uppercase' weight='regular' spacing='xs'>Ваша роль</Text>
              </th>
              <th className={tb('col', { align: 'left' })}>
                <Text tag='p' size='xs' view='secondary' transform='uppercase' weight='regular' spacing='xs'>Автор</Text>
              </th>
              <th className={tb('col', { align: 'left', 'align': 'right'})}>
                <Text tag='p' size='xs' view='secondary' transform='uppercase' weight='regular' spacing='xs'>Создан</Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((project, index) => {
              return (
                <tr className={b('table-item').mix(tb('row'))} key={`${project.name} ${index}`} >
                  <td className={tb('col')}>
                    <Text tag='p' size='m' view='primary'>{project.name}</Text>
                  </td>
                  <td className={tb('col')}>
                    <Text tag='p' size='m' view='primary' weight='bold'>{project.src}</Text>
                  </td>
                  <td className={tb('col')}>
                    <Text tag='p' size='m' view='primary'>{project.role}</Text>
                  </td>
                  <td className={tb('col')}>
                    <Text tag='p' size='m' view='primary'>{project.author}</Text>
                  </td>
                  <td className={tb('col', {'align': 'right'})}>
                    <Text tag='p' size='m' view='primary'>{project.made}</Text>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default Main;