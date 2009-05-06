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
 * Revision:        $Rev:465 $
 * Last Changed:    $Date:2006-10-20 12:16:08 +0200 (Fr, 20 Okt 2006) $
 * Last Changed By: $Author:tmo $
 */

package org.efaps.util.cache;

import java.util.UUID;

/**
 * @author tmo
 * @version $Id:CacheObjectInterface.java 465 2006-10-20 12:16:08 +0200 (Fr, 20 Okt 2006) tmo $
 * @todo description
 */
public interface CacheObjectInterface  {

  public String getName();

  public UUID getUUID();

  public long getId();
}
