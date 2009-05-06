/*
 * Copyright 2006 The eFaps Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author:          tmo
 * Revision:        $Rev$
 * Last Changed:    $Date$
 * Last Changed By: $Author$
 */

with (TABLE)  {
  with (addField("name"))  {
    addProperty("Expression",                   "Name");
    addProperty("HRef",                         "${COMMONURL}/MenuTree.jsp");
    addProperty("Label",                        "TeamCenter_Folder/Name.Label");
    addProperty("ShowTypeIcon",                 "true");
  }
  with (addField("buttonOpenInNewWindow"))  {
    addProperty("HRef",                         "${COMMONURL}/MenuTree.jsp");
    addProperty("Target",                       "popup");
    addIcon("eFapsActionNewWindow");
  }
}