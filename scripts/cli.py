#!/usr/bin/env python

import logging
import sys
from typing import Callable

from errors import NoCommandInputException, CommandNotFoundException
from functions import contributors


class CommandLine:
    def __init__(self, argv: list[str]):
        self.argv = argv[1:]
        self.logger = logging.getLogger(__name__)
        self.registered_commands: list[Callable] = list()
        for func in dir(self):
            if not func.startswith('_') and callable(func := getattr(self, func)):
                self.registered_commands.append(func)

    list_contributors = contributors.ListContributors()

    def run(self):
        try:
            argv = self.argv[0]
        except IndexError:
            raise NoCommandInputException()

        command_names = [
            command.__name__ for command in self.registered_commands]
        if argv not in command_names:
            self.logger.error(
                f'Command not found: {argv}\n' + '\n'.join(command_names)
            )
            raise CommandNotFoundException(
                command=argv,
                registered=command_names
            )
        getattr(self, argv)()


if __name__ == '__main__':
    CommandLine(argv=sys.argv).run()
