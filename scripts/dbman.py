import os

from sqlite3 import Cursor
from string import printable
from sys import argv
from dotenv import load_dotenv
from prettytable import PrettyTable, from_db_cursor

import psycopg2
import inquirer

def ConnectToDB(constrnig):
    return psycopg2.connect(constrnig)

def LoadEnv():
    path_to_prev_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    filepath = os.path.join(path_to_prev_dir, '.env')
    
    load_dotenv(filepath)

def SQL_SELECT(cursor: Cursor, table: str):
    try:
        cursor.execute("""SELECT * FROM %s;""", [table.lower()] )
        tbl = from_db_cursor(cursor)

        print(tbl)
    except (Exception, psycopg2.Error) as error:
        print('Error while working with PostgreSQL', error)
    finally:
        cursor.close()


def SQL_INSERT():
    pass

def SQL_UPDATE():
    pass

def SQL_DELETE():
    pass

def PopulateMenu():
    try:
        connection = ConnectToDB(os.getenv('REACT_APP_DB_MAIN'))
    except:
        print('Can`t to connect to database')
        return
    
    selector = [
        inquirer.List('table', 'Select TABLE', ['USERS', 'CHARACTERS']),
        inquirer.List('operation', 'Operation', ['SELECT', 'INSERT', 'UPDATE', 'DELETE'])    
    ]

    result = inquirer.prompt(selector)

    match result['operation']:
        case 'SELECT':
            SQL_SELECT(connection.cursor(), result['table'])
        case 'INSERT':
            pass
        case 'UPDATE':
            pass
        case 'DELETE':
            pass

if __name__ == '__main__':
    LoadEnv()
    PopulateMenu()