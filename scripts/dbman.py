from datetime import datetime
import os

from sqlite3 import Connection, Cursor, Date
from dotenv import load_dotenv
from prettytable import from_db_cursor

import psycopg2
from psycopg2.extensions import AsIs 
import inquirer

def ConnectToDB(constrnig):
    return psycopg2.connect(constrnig)

def SQL_SELECT(cursor: Cursor, table: str):
    try:
        cursor.execute("SELECT * FROM %s;", (AsIs(table.lower()), ))
        tbl = from_db_cursor(cursor)
        print(tbl)
    except (Exception, psycopg2.Error) as error:
        print('Error while working with PostgreSQL', error)
    finally:
        cursor.close()

def SQL_USER_INSERT(connection: Connection):
    try:
        sel = [
            inquirer.Text('ckey', message='Ckey'),
            inquirer.Text('discord', message='Discord id'),
            inquirer.Text('first', message='First appearance (Y-m-d)'),
            inquirer.Text('last', message='Last appearance (Y-m-d)')
        ]
        
        res = inquirer.prompt(sel)

        first_normalized = datetime.strptime(res['first'], '%Y-%m-%d')
        last_normalized = datetime.strptime(res['last'], '%Y-%m-%d')

        connection.cursor().execute("INSERT INTO users (ckey, discord_id, first_appearance, last_appearance) VALUES (%s, %s, %s, %s);", 
                                    (res['ckey'], res['discord'], first_normalized, last_normalized, ))
        
        connection.commit()
    except (Exception, psycopg2.Error) as error:
        print('Error while working with PostgreSQL', error)
    finally:
        connection.cursor().close()

def SQL_CHARACTER_INSERT(connection: Connection):
    try:
        sel = [
            inquirer.Text('owner', message='Owner (ckey)'),
            inquirer.Text('name', message='Character name'),
            inquirer.Text('age', message='Character age'),
        ]

        
        res = inquirer.prompt(sel)

        connection.cursor().execute("INSERT INTO characters (owner_id, name, age) VALUES (%s, %s, %s);", (res['owner'], res['name'], res['age'], ))
        connection.commit()
    except (Exception, psycopg2.Error) as error:
        print('Error while working with PostgreSQL', error)
    finally:
        connection.cursor().close()

def SQL_USER_DELETE(connection: Connection):
    try:
        sel = [
            inquirer.Text('ckey', message='Ckey')    
        ]

        res = inquirer.prompt(sel)

        connection.cursor().execute("DELETE FROM users WHERE ckey = %s", (AsIs(sel['ckey'])))
        connection.commit()
    except (Exception, psycopg2.Error) as error:
        print('Error while working with PostgreSQL', error)
    finally:
        connection.cursor().close()

def SQL_CHARACTER_DELETE(connection: Connection):
    try:
        sel = [
            inquirer.Text('ckey', message='Owner ckey'),
            inquirer.Text('name', message='Character name')    
        ]

        res = inquirer.prompt(sel)

        connection.cursor().execute("DELETE FROM characters WHERE owner_id = %s AND name = %s", (AsIs(sel['ckey']), AsIs(sel['name'])))
        connection.commit()
    except (Exception, psycopg2.Error) as error:
        print('Error while working with PostgreSQL', error)
    finally:
        connection.cursor().close()

def LoadEnv():
    path_to_prev_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    filepath = os.path.join(path_to_prev_dir, '.env')
    
    load_dotenv(filepath)

def PopulateMenu():
    try:
        connection = ConnectToDB(os.getenv('REACT_APP_DB_MAIN'))
    except:
        print('Can`t to connect to database')
        return
    
    selector = [
        inquirer.List('table', 'Select TABLE', ['USERS', 'CHARACTERS']),
        inquirer.List('operation', 'Operation', ['SELECT', 'INSERT', 'UPDATE', 'DELETE']),
    ]

    result = inquirer.prompt(selector)

    match result['operation']:
        case 'SELECT':
            SQL_SELECT(connection.cursor(), result['table'])
        case 'INSERT':
            if result['table'] == "USERS": 
                SQL_USER_INSERT(connection)
            else: 
                SQL_CHARACTER_INSERT(connection)
        case 'DELETE':
            if result['table'] == 'USERS':
                SQL_USER_DELETE(connection)
            else:
                SQL_CHARACTER_DELETE(connection)

if __name__ == '__main__':
    LoadEnv()
    PopulateMenu()